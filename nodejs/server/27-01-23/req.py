import requests
import json
data = requests.get('http://localhost:5000/friends')
data = json.loads(data.text)

for i in data['payload']:
    try:
        print(f" your name is {i['name']} \n your age is {i['age']}")
    except:
        print('error')