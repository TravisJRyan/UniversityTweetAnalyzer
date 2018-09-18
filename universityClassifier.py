from __future__ import division
import json

sportsCount = 0
beerAndCircusCount = 0
academicCount = 0

sportsTerms = ["game", "sports", "ball", "soccer", "lacrosse", "field hockey", "bowling", "tennis", "hockey", "rugby", "athletics", "athlete", "stadium", "field", "mascot"]
beerAndCircusTerms = ["fraternities", "fraternity", "sorority", "sororities", "greek", "rush week", "rushing", "alcohol", "beer", "concert", "party", "tailgate", "tailgating"]
academicTerms = ["honors", "research", "paper", "study", "academic", "science", "class", "intern"]

secTwitterHandles = ["OleMissRebels", "uf", "universityofga", "universityofky", "usc", "UTKnoxville", "VanderbiltU",
    "UofAlabama", "UArkansas", "AuburnU", "LSU", "Mizzou", "msstate", "TAMU"]

def main():
    universityName = raw_input("Enter university: ")
    with open('/Users/travisryan/Programming/UniversityTwitterAnalyzer/tweets/'+universityName+'/'+universityName+'.json') as json_file:  
        data = json.load(json_file)
        for tweet in data:
            analyzeTweet(tweet['text'].lower())
        print universityName, " mentions of beerAndCircus: ", beerAndCircusCount, " out of ", len(data), "(Percent: ", beerAndCircusCount/len(data), ")"
        print universityName, " mentions of sports: ", sportsCount, " out of ", len(data), "(Percent: ", sportsCount/len(data), ")"
        print universityName, " mentions of academics: ", academicCount, " out of ", len(data), "(Percent: ", academicCount/len(data), ")"

def analyzeTweet(tweetText):
    sportsTweet = False
    academicTweet = False
    beerAndCircusTweet = False
    global beerAndCircusCount
    global academicCount
    global sportsCount
    for term in sportsTerms:
        if term in tweetText:
            sportsTweet = True
    for term in academicTerms:
        if term in tweetText:
            academicTweet = True
    for term in beerAndCircusTerms:
        if term in tweetText:
            print tweetText
            beerAndCircusTweet = True
    if beerAndCircusTweet:
        beerAndCircusCount += 1
    if academicTweet:
        academicCount += 1
    if sportsTweet:
        sportsCount += 1

main()