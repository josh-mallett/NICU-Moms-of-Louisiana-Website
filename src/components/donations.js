import React, { Component } from 'react';

const Donate = () =>  {

  return (
    <div id="donate" className="donate">
      <div className="donate_body">
        <DonateHeader />
        <DonateContent />
      </div>
    </div>
  );
}

const DonateHeader = () =>  {
  return (
    <div className="donate_header">
      <div className="donate_header_container">
        <div className="donate_icon"></div>
        <div className="donate_title"><h1>DONATIONS</h1></div>
        <div className="donate_icon"></div>
      </div>
    </div>
  );
}

const DonateContent = () =>  {
  return (
    <div className="donate_content">
      <PaypalButton />
      <DonateText />
    </div>
  );
}

const PaypalButton = () =>  {
  return (
    <div className="paypal_donation_button">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"></input>
          <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHNwYJKoZIhvcNAQcEoIIHKDCCByQCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAtNBR31Ck6mlLaNpX4S0ZYtB217aZ0skij7ee187bh7N1RuG/XrkMxM04GmNa41OfddjMvhkajpbV0P6yfNnCBzLqh3YPQ4eqipBnXHykq5NrERr6IrPdec6H6mSulR7HwqCa7UPm/mYcZo+u+b5j2CBffdl9oH3t0ZCNQ7A+LYDELMAkGBSsOAwIaBQAwgbQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIT7FUDoCS6y6AgZDz4yd5ALG/nUAgVZi9Qe5nv/HINTKDdTwXtc/q6hXOknNB862jV1EDdV+p38nIxTVRpBVeNcantmIPCpAfRdxnVzdRmUNWhykg33yoLa19jtANjybpISoEZ6TvgWa8yOp4ffRRviBrAncUinHCSBzu9oDfumiVRPKBUsS6SGw5rl1AL7uMDX3uTeDvCyCZ2ZGgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xNzAyMjQwMDEzNTBaMCMGCSqGSIb3DQEJBDEWBBQvjfe9LcFfZCTMPY8sZJaVCc+mGTANBgkqhkiG9w0BAQEFAASBgEy4RyT49j6VLvHoWlaqwipzHzY2GlWo20Y+rQgN4NeZIaeBe84zM7+nyWdabNuHcuatloLObIb418IDfriQcJUUJSziBlnP9XlyoTCj5U0XDBtMGdxA719zzlfxdRfJy7Ux125vBK19d24oZXFGEVeFIiVoVU6LT7N38RgzZmKQ-----END PKCS7-----
          "></input>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
          </form>
        </div>
  );
}


const DonateText = () =>  {
  return (
    <div className="donate_text">
      <p>
        Our goal is to spread as much positivity and help to as many NICU's as we can. Donations play an integral role in helping us achieve that goal. They help us do things like:
      </p>
      <div className="nicu_christmas">
        <a href="http://www.katc.com/story/33864871/group-sends-christmas-gifts-to-nicus-across-the-state" target="_blank"><img type="image" src="./images/nicumoms_christmas.jpg" />
        </a>
      </div>
    </div>
  );
}

module.exports =  Donate;
