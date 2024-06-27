export default (()=>{
    return new Promise((resolve, reject) => {
        let tmplIds = 'R9BkA3tn3DcAOztx2zmuFR-hfeMDPVNTfQI9YrH8RVc';
        
        wx.requestSubscribeMessage({   // 调起消息订阅界面
            tmplIds: [tmplIds],
            success (res) { 
              
              resolve();
            },
            fail (er){
                
              
            
              // 
              resolve();
            }
          })   
    })
})