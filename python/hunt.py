import requests
from lxml import etree

global url
global data
url = "https://mp.weixin.qq.com/s?__biz=MzUzNzczNjUxNw==&mid=100001196&idx=6&sn=1bcf08414bafb25dfbcb430edd50a35b&scene=19#wechat_redirect"

def main():
    res = requests.get(url)
    res.encoding = 'utf-8'
    response = etree.HTML(res.text)
    html = response.xpath("//div[@class='rich_media_content ']")
    print(res.text)
main()