import React from "react";

function MainFooter() {
  return (
    <>
      <div class="mainbg-footer">
        <div class="footer-title">
          <img src="images jpg/Footer/Title.png" alt="footer title" />
        </div>
        <div class="social">
          <img src="images jpg/Footer/Facebook.png" alt="" />
          <img src="images jpg/Footer/Youtube.png" alt="" />
          <img src="images jpg/Footer/Twitter.png" alt="" />
        </div>
        <span class="downloads">Downloads</span>
        <div class="google-apple">
          <img src="images jpg/Footer/GooglePlayBadge.png" alt="" />
          <img src="images jpg/Footer/AppStoreBadge.png" alt="" />
        </div>
        <div class="footer-links">
          <a href="#" class="CompanyLink">
            Company
          </a>
          <a href="#" class="AboutusLink">
            About us
          </a>
          <a href="#" class="TnCLink">
            Terms and Conditions
          </a>
          <a href="#" class="ContactusLink">
            Contact Us
          </a>
          <a href="#" class="PrivacyPolicyLink">
            Privacy Policy
          </a>
          <a href="#" class="FaqsLink">
            FAQs
          </a>
        </div>

        <hr class="line" />
        <span class="last-line">
          By Continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of respective owners. 2008-2020 © All rights reserved.
        </span>
      </div>
    </>
  );
}

export default MainFooter;
