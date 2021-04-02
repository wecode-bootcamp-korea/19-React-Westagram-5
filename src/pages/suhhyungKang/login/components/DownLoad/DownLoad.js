import React, { Component } from 'react'


class DownLoad extends Component {
  render() {
    return (
      <div className="app">
        <div className="downLoad">
          <p className="appDown">앱을 다운로드 하세요.</p>
          <div className="appleApp">
            <a className="apple"
              href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"><img alt="App Store에서 이용 가능" className="Rt8TI "
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" /></a>

            <a className="z1VUo"
              href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9D19A601-1584-40B9-9526-362AC1660D49%26utm_content%3Dlo%26utm_medium%3Dbadge">
              <img alt="Google Play에서 이용 가능" className="Rt8TI "
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" /></a>
          </div>
        </div>
      </div>
    )
  }
}
export default DownLoad;