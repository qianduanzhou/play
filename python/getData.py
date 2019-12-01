import requests

import pymysql

from lxml import etree


conn = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="play",
    charset="utf8")

cursor = conn.cursor()


global url
global data
url = "http://www.infogame.cn"
data = []

def main():
    res = requests.get(url)
    res.encoding = 'utf-8'
    response = etree.HTML(res.text)
    bigTypes = response.xpath("//div[@class='content2']/h2/a/text()")
    leftTypes = response.xpath("//div[@class='content2']/div[@class='left2']/div[@class='wyzx']/div[@class='wyzx_tit']/span/a/text()")
    leftUrls = response.xpath("//div[@class='content2']/div[@class='left2']/div[@class='wyzx']/div[@class='wyzx_tit']/span/a/@href")

    centerTypes = response.xpath("//div[@class='content2']/div[@class='cn2']/div[@class='wyzx_tit']/span/a/text()")
    centerUrls = response.xpath("//div[@class='content2']/div[@class='cn2']/div[@class='wyzx_tit']/span/a/@href")

    rightTypes = response.xpath("//div[@class='content2']/div[@class='right2']/div[@class='wyzx_tit']/span/a/text()")
    rightUrls = response.xpath("//div[@class='content2']/div[@class='right2']/div[@class='wyzx_tit']/span/a/@href")
    # print(leftUrls,centerUrls,rightUrls)
    # print(leftTypes,centerTypes,rightTypes)
    for index,bigUrl in enumerate(leftUrls):
        # print(index,bigUrl)
        findUrls(bigUrl,bigTypes[index],leftTypes[index])
    for index,bigUrl in enumerate(centerUrls):
        # print(index,bigUrl)
        findUrls(bigUrl,bigTypes[index],centerTypes[index])
    for index,bigUrl in enumerate(rightUrls):
        # print(index,bigUrl)
        findUrls(bigUrl,bigTypes[index],rightTypes[index])
def findUrls(urls,bigType,type):
    global url
    res = requests.get(url+urls)
    res.encoding = 'utf-8'
    response = etree.HTML(res.text)
    images = response.xpath("//div[@class='content']/div[@class='left2']/div[@class='left2_wen']/div[@class='left2_wl']/a/img/@src")
    titles = response.xpath("//div[@class='content']/div[@class='left2']/div[@class='left2_wen']/div[@class='left2_wr']/a/text()")
    updateTimes =  response.xpath("//div[@class='content']/div[@class='left2']/div[@class='left2_wen']/div[@class='left2_cd']/div[@class='left2_csj']/text()")
    inUrls = response.xpath("//div[@class='content']/div[@class='left2']/div[@class='left2_wen']/div[@class='left2_wr']/a/@href")
    # print(images,titles,updateTimes,inUrls,bigType,type)
    for index,inUrl in enumerate(inUrls):
        getData(images[index], titles[index], updateTimes[index], inUrl,bigType,type)

def getData(image,title,updateTime,inUrl,bigType,type):
    global data
    global url
    res = requests.get(url + inUrl)
    res.encoding = 'utf-8'
    response = etree.HTML(res.text)
    introductions = response.xpath("//div[@class='content']/div[@class='left']/div[@class='text']/p/text()")
    introduction = '/n'.join(introductions)
    # print(introduction)
    if image[0] != 'h':
        image = url + image

    objs = {
        "bigType":bigType,
        "type":type,
        "title":title,
        "introduction":introduction,
        "image":image,
        "updateTime":updateTime
        }
    data.append(objs)
main()

sql = 'insert into found(bigType,type,title,introduction,updateTime,image) values(%s,%s,%s,%s,%s,%s);'

for index,item in enumerate(data):
    arr = [item['bigType'],item['type'],item['title'],item['introduction'],item['updateTime'],item['image']]
    cursor.execute(sql, arr)

conn.commit()
cursor.close()
conn.close()