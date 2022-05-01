import requests
import json
import re


def getstorypics(url, sentence):
    
    # url = "http://3973-34-124-230-90.ngrok.io/testgen"

    payload = json.dumps({"sentence": sentence })
    
    headers = {
    'Content-Type': 'application/json'
    }


    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
    
    js = json.loads(response.text)
    
    return js['imurls']
    


def getstory(url, sentence):
    
    # url = "http://49b5-35-223-164-204.ngrok.io/getstory"

    payload = json.dumps({"sentence": sentence})
    
    
    sentence = re.sub('\s+(a|an|and|the)(\s+)', '\2', sentence)
    
    wordlist = sentence.split()
    
    payload = json.dumps({
    "words": wordlist
    })

    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
    
    js = json.loads(response.text)
    surl = js['surl']
    story = js['story']
    
    surl = surl.replace("https://","")
    
    print (surl)
    
    return surl, story
