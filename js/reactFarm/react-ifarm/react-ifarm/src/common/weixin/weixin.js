import 'isomorphic-fetch'
const url="/api/jsapi_sign"
function wxcall(func){
      fetch(url,{  credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({url: location.href.split('#')[0] })  
        })
        .then(res => res.json())
        .then(json => {
          // console.log(json)       
          wx.config({
            "debug": false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            "appId": json.app_id, // 必填，公众号的唯一标识
            "timestamp": json.timestamp, // 必填，生成签名的时间戳
            "nonceStr": json.noncestr, // 必填，生成签名的随机串
            "signature": json.sign,// 必填，签名，见附录1
            "jsApiList": ['scanQRCode','chooseImage','uploadImage','previewImage','downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
          wx.ready(function(){
              func()
          })
          wx.error(function(res){
            alert(res)
          })

        })
}
export function scanQRCode(){
  wxcall(
    ()=>wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                  var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  alert(result )
                }
              })
  )
   
}
export function uploadImage(){
  wxcall(()=> wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function (res) {
                  var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                  // alert(localIds)
                    wx.uploadImage({
                      localId: res.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
                      isShowProgressTips: 1, // 默认为1，显示进度提示
                      success: function (res) {
                          var serverId = res.serverId; // 返回图片的服务器端ID 此处获得的 serverId 即 media_id
                          //http://mp.weixin.qq.com/wiki/12/58bfcfabbd501c7cd77c19bd9cfa8354.html 下载多媒体文件
                          console.log(serverId)
                          alert(serverId)
                          fetch("/api/uploadImage",{  credentials: 'same-origin',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            method: "POST",
                            body: JSON.stringify({media_id: serverId })  
                          }).then(json=>json()).then(json=>{

                          })
                          // wx.downloadImage({
                          //   serverId: res.serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                          //   isShowProgressTips: 1, // 默认为1，显示进度提示
                          //   success: function (res) {
                          //       var localId = res.localId; // 返回图片下载后的本地ID
                          //       alert(localId)
                          //   }
                          // });
                      }
                      ,error:function(res){
                        alert(res)
                      }
                  });
              }
          })
    )
}
/*
onMenuShareTimeline
onMenuShareAppMessage
onMenuShareQQ
onMenuShareWeibo
onMenuShareQZone
startRecord
stopRecord
onVoiceRecordEnd
playVoice
pauseVoice
stopVoice
onVoicePlayEnd
uploadVoice
downloadVoice
chooseImage
previewImage
uploadImage
downloadImage
translateVoice
getNetworkType
openLocation
getLocation
hideOptionMenu
showOptionMenu
hideMenuItems
showMenuItems
hideAllNonBaseMenuItem
showAllNonBaseMenuItem
closeWindow
scanQRCode
chooseWXPay
openProductSpecificView
addCard
chooseCard
openCard */
