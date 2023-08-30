export const template = (
  name: string,
  subject: string,
  email: string,
  message: string
) => {
  return `
  <body style="width: 100%;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;padding: 0;margin: 0;">
  <div class="wrapper-color" style="background-color: #f1f1f1;height: 100vh;">
    <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" style="padding: 0;margin: 0;">
      <tbody>
        <tr style="border-collapse: collapse;">
          <td valign="top" style="padding: 0;margin: 0;">
            <table class="header" cellspacing="0" cellpadding="0" align="center" style="width: 100%;table-layout: fixed !important; padding-top: 60px">
              <tbody>
                <tr style="border-collapse: collapse;">
                  <td align="center" style="padding: 0;margin: 0;">
                    <table style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                      <tbody>
                        <tr style="border-collapse: collapse;">
                          <td class="p10t p10b p40r p40l" align="left" style="padding: 0;margin: 0;padding-top: 10px;padding-bottom: 10px;padding-left: 40px;padding-right: 40px;">
                            <table class="left" cellspacing="0" cellpadding="0" align="left" style="float: left;">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td class="es-m-p20b esd-container-frame" width="250" align="left" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td align="left" style="font-size: 0;padding: 0;margin: 0;"><a href="https://wierucki.com" target="_blank"><img src="https://wierucki.com/logo.ico" alt style="display: block;" width="50"></a></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table class="right" cellspacing="0" cellpadding="0" align="right" style="float: right;">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td width="250" align="left" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10t infoblock m-txt-c" align="right" style="padding: 0;margin: 0;padding-top: 10px;line-height: 120%;font-size: 12px;color: #cccccc;">
                                            <p style="font-family: arial, helvetica\ neue, helvetica, sans-serif;margin: 0;line-height: 150%;">Nowa wiadomość</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="content" cellspacing="0" cellpadding="0" align="center" style="width: 100%;table-layout: fixed !important;">
              <tbody>
                <tr style="border-collapse: collapse;">
                  <td align="center" style="padding: 0;margin: 0;">
                    <table class="content-body" style="border-left:1px solid #dddddd;border-right:1px solid #dddddd;border-top:1px solid #dddddd;border-bottom:1px solid #dddddd;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                      <tbody>
                        <tr style="border-collapse: collapse;">
                          <td class="p40t p40r p40l" align="left" style="padding: 0;margin: 0;padding-top: 40px;padding-left: 40px;padding-right: 40px;">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td width="518" valign="top" align="center" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td align="left" class="p5t p15b" style="padding: 0;margin: 0;padding-top: 5px;padding-bottom: 15px;">
                                            <h2 style="margin: 0;line-height: 120%;font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;font-size: 20px;font-style: normal;font-weight: bold;color: #333333;">Cześć,</h2>
                                          </td>
                                        </tr>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10b" align="left" style="padding: 0;margin: 0;padding-bottom: 10px;">
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;"><strong>${subject}</strong></p>
                                          </td>
                                        </tr>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10t p10b" align="left" style="padding: 0;margin: 0;padding-top: 10px;padding-bottom: 10px;">
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;">${message}</p>
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;"><br><br></p>
                                          </td>
                                        </tr>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10t p10b" align="left" style="padding: 0;margin: 0;padding-top: 10px;padding-bottom: 10px;">
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;">Od ${name} - ${email},</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr style="border-collapse: collapse;">
                          <td class="p10t p40b p40r p40l" align="left" style="padding: 0;margin: 0;padding-top: 10px;padding-bottom: 40px;padding-left: 40px;padding-right: 40px;">
                            <table class="left" cellspacing="0" cellpadding="0" align="left" style="float: left;">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td class="m-p0r m-p20b" width="39" valign="top" align="center" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td align="left" style="font-size: 0;padding: 0;margin: 0;"><a target="_blank"><img src="https://media.licdn.com/dms/image/C4D03AQGAjyhnSWXVjQ/profile-displayphoto-shrink_800_800/0/1659286795732?e=2147483647&v=beta&t=w3NS-b8nsQC-BtZ_-tjTHvTJCi_A9HmfBpLNa62KFaE" alt style="display: block; border-radius: 50%;" width="39"></a></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table cellspacing="0" cellpadding="0" align="right">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td width="459" align="left" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10t" align="left" style="padding: 0;margin: 0;padding-top: 10px;">
                                            <p style="color: #222222;font-size: 14px;margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;"><strong>Miłosz Wierucki</strong><br></p>
                                          </td>
                                        </tr>
                                        <tr style="border-collapse: collapse;">
                                          <td align="left" style="padding: 0;margin: 0;">
                                            <p style="color: #666666;font-size: 14px;margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;">Owner | Student</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="footer" cellspacing="0" cellpadding="0" align="center" style="width: 100%;table-layout: fixed !important;">
              <tbody>
                <tr style="border-collapse: collapse;">
                  <td align="center" style="padding: 0;margin: 0;">
                    <table class="footer-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                      <tbody>
                        <tr style="border-collapse: collapse;">
                          <td class="p40t p40b p40r p40l" align="left" style="padding: 0;margin: 0;padding-top: 40px;padding-bottom: 40px;padding-left: 40px;padding-right: 40px;">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr style="border-collapse: collapse;">
                                  <td width="520" valign="top" align="center" style="padding: 0;margin: 0;">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr style="border-collapse: collapse;">
                                          <td class="p10b" align="left" style="padding: 0;margin: 0;padding-bottom: 10px;">
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;color: #666666;font-size: 12px;">This email was sent to you from the contact form on Wierucki.com</p>
                                          </td>
                                        </tr>
                                        <tr style="border-collapse: collapse;">
                                          <td align="left" style="padding: 0;margin: 0;">
                                            <p style="margin: 0;font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height: 150%;color: #666666;font-size: 12px;">Copyright © 2023 <strong>Wierucki.com</strong>, All Rights Reserved.<br></p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
  `;
};
