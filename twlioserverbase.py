from flask import Flask, request, redirect, Response
from twilio.twiml.messaging_response import MessagingResponse
# import tns
# import dataloader
from twilio.rest import Client 
import requests
import json
# import pymongo
import time
from flask_cors import CORS
import storylib as slib





# def initdb():
    
#     mongostr = "mongodb://teamzero:ItVNHcsM3Lsw2KhwWngRStQtJaqTD8rDNoYNml80Bz1CeFUshtd6lnOgIUutehx3i8WTpk1dOriipfrwbMLmfw==@teamzero.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@teamzero@"
#     client = pymongo.MongoClient(mongostr)
#     db = client["masongives"]

#     return client, db


# def initdb2():
    
#     mongostr = "mongodb://teamzero:ItVNHcsM3Lsw2KhwWngRStQtJaqTD8rDNoYNml80Bz1CeFUshtd6lnOgIUutehx3i8WTpk1dOriipfrwbMLmfw==@teamzero.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@teamzero@"
#     client = pymongo.MongoClient(mongostr)
#     db = client["sentimentizer"]

    # return client, db

texturl = "http://49b5-35-223-164-204.ngrok.io/getstory"
imgurl = "http://2364-34-124-230-90.ngrok.io/testgen"

incomingstate = 0
incomingnum = ""
doctorname = "Dr Victor Von Doom"
patientname = "Reed Richards"
aptdate = "02/01/2022"
apttime = "16:20"

survey =[]
answers = []
qid = "-1"
userid = "-1"
surveyid = "-1"
onum = 0

oitems = ""



def sendwhatsapp(text, tonum, fromnum):
    
    account_sid = 'AC2e9791a102ff64ae9008e3fbb3a5cec5' 
    auth_token = '57649108e11165660bab29ee3744d7cd' 
    client = Client(account_sid, auth_token) 
    
    message = client.messages.create( 
                                # from_='whatsapp:+14155238886',  
                                from_=fromnum,
                                # body='Your Twilio code is 1238432',
                                # body='Your story is somewhat funny. Details: http://www.tellmeastory.tech/',  
                                # body='Your appointment is coming up on July 21 at 3PM',    
                                body=text,
                                # to='whatsapp:+13218775974' 
                                to=tonum
                            ) 
    
    print(message.sid)





def getuserfromphone(phone):
    
    global userid

    url = "https://us-central1-aiot-fit-xlab.cloudfunctions.net/tellmeastory"

    payload = json.dumps({
    "action": "getuseridfromphone",
    "phone": phone
    })
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
    
    js = json.loads(response.text)
    
    if js['status'] == "found":
        name = js['name']
        points = js['balance']
        userid = js['id']
        
        return name, points

    
    userid = "-1"
    
    return "unknown", -1





app = Flask(__name__)
CORS(app)

def setcreds(nc):
    global cred
    cred = nc

    return "success"

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/smsbase", methods=['POST'])
def sms_reply():
    """Respond to incoming calls with a simple text message."""

    global incomingstate, incomingnum, survey, answers, qid, surveyid, userid
    global cred
    global oitems
    global onum
    global texturl
    # global doctorname, patientname, aptdate, apttime
    
    # client, db = initdb()
    
    print(request.values['From'])
    
    incomingnum = request.values['From']
    
    incomingnum2 = incomingnum.replace('+', '')
    
    print (incomingnum)
    
    # n, p = getuserfromphone(incomingnum)
    n = "friend"
    p = 1
    

    incoming = request.values['Body']
    
    incoming = incoming.lower()

    print("incoming text is " + incoming)


    # Start our TwiML response
    resp = MessagingResponse()

    flag = 0
    outstring = "Unfortunately storyteller did not understand the following message ..." + incoming
    
    
    if "tell" in incoming:
        if "tell me a story about " not in incoming:
            outstring= "Hello! Welcome to storyteller!  Please message me with the following format.. tell me a story about <some small sentence or words here> OR show me a story about <some small sentence or words here> " 
            resp.message(outstring)

            return str(resp)
        incoming = incoming.replace("tell me a story about ", "")
        print(incoming)
        surl, story = slib.getstory(texturl, incoming)
        
        print (surl)
        
        print (story)
        # outstring= "Hello! Welcome to storyteller! here is your story, enjoy! " +surl +  " thank you for using storyteller! " 
        outstring= "Hello! Welcome to storyteller! here is your story, enjoy! " + story +  " thank you for using storyteller! "
        resp.message(outstring)
        
        return str(resp)

    if "show" in incoming:
        if "show me a story about " not in incoming:
            outstring= "Hello! Welcome to storyteller!  Please message me with the following format.. tell me a story about <some small sentence or words here> OR show me a story about <some small sentence or words here> " 
            resp.message(outstring)

            return str(resp)
        incoming = incoming.replace("show me a story about ", "")
        print(incoming)
        imurls = slib.getstorypics(imgurl, incoming)
        
        
        print (imurls)
        
        # print (story)
        # outstring= "Hello! Welcome to storyteller! here is your story, enjoy! " +surl +  " thank you for using storyteller! " 
        outstring= "Hello! Welcome to storyteller! here is the first image of your story, enjoy! " + imurls[0] +  " thank you for using storyteller! "
        resp.message(outstring)
        
        return str(resp)


        
    # https://storage.googleapis.com/dragonhacks2022/dallE0.jpg

        


    # Add a message
    if flag ==0:
        outstring = "Unfortunately storyteller did not understand your message. Please message me with the following format.. tell me a story about <some small sentence or words here> OR show me a story about <some small sentence or words here> "
    
    resp.message(outstring)

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True, host = 'localhost', port = 8004)
    # app.run(debug=True, host = '45.79.199.42', port = 8004)
