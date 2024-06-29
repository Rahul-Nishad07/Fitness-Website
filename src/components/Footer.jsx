import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget">
              <Link to="/">
                <img src="img/resources/fitlogo.png" alt="Awesome Image" />
              </Link>
              <p>Welcome to Peak Performance Gym. Modern equipment, expert trainers, group classes, and a supportive community to elevate your fitness journey.</p>
              <ul className="social list-inline">
                <li><a href="https://www.google.com/search?q=facebook&sca_esv=dfca0da07af2405c&rlz=1C1GCEU_enIN1108IN1108&sxsrf=ADLYWILZsCsnwmEIowrDtXqaRwCGz1S3AQ%3A1719634203992&ei=G4l_Zs2XPMnAvr0PtLDe4AU&gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&oq=facebook&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZhY2Vib29rKgIIADIWEC4YgAQYsQMY0QMYQxiDARjHARiKBTIKEAAYgAQYQxiKBTIQEC4YgAQYQxjHARiKBRivATIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTILEAAYgAQYsQMYgwEyChAAGIAEGEMYigUyChAAGIAEGEMYigUyCxAAGIAEGLEDGIMBMggQABiABBixAzIlEC4YgAQYsQMY0QMYQxiDARjHARiKBRiXBRjcBBjeBBjgBNgBBEjWNFD-CFiTIXACeAGQAQSYAZ0CoAHHEaoBBjAuMTAuM7gBAcgBAPgBAZgCDKACxR2oAhHCAgoQABiwAxjWBBhHwgITEC4YgAQYsAMY0QMYQxjHARiKBcICGRAuGIAEGLADGNEDGEMYxwEYyAMYigXYAQHCAhAQABiABBixAxiDARgUGIcCwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhkQLhiABBjRAxhDGLQCGMcBGIoFGOoC2AECwgITEAAYgAQYQxi0AhiKBRjqAtgBAsICHBAuGIAEGNEDGEMYtAIYxwEYyAMYigUY6gLYAQPCAgoQIxiABBgnGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARjUAsICDRAAGIAEGLEDGEMYigWYAwaIBgGQBgy6BgQIARgIugYGCAIQARgBugYGCAMQARgIugYGCAQQARgUkgcHMi45LjgtMaAHj4sB&sclient=gws-wiz-serp"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.google.com/search?q=twitter&sca_esv=dfca0da07af2405c&rlz=1C1GCEU_enIN1108IN1108&sxsrf=ADLYWIJxG5zg0EDbf1kPyqUHhsArRmw07w%3A1719634266639&ei=Wol_ZqXaJp-gnesP-eCJ6A4&gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&oq=twitter&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3R3aXR0ZXIqAggAMhEQLhiABBixAxjRAxiDARjHATIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTILEAAYgAQYsQMYgwEyEBAAGIAEGLEDGEMYgwEYigUyCBAAGIAEGLEDMggQABiABBixAzIgEC4YgAQYsQMY0QMYgwEYxwEYlwUY3AQY3gQY4ATYAQFI_ypQrQVYqiNwAngBkAEEmAGgAaABpw2qAQQwLjEzuAEByAEA-AEBmAIKoALwCKgCE8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgITEC4YgAQYsAMY0QMYQxjHARiKBcICBxAjGCcY6gLCAg0QLhjRAxjHARgnGOoCwgIZEC4YgAQY0QMYQxi0AhjHARiKBRjqAtgBAsICExAAGIAEGEMYtAIYigUY6gLYAQLCAgQQIxgnwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAuGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBixAxiDARiKBcICExAuGIAEGNEDGEMY1AIYxwEYigXCAggQLhiABBixA8ICJRAuGIAEGLEDGNEDGEMYgwEYxwEYigUYlwUY3AQY3gQY4ATYAQGYAweIBgGQBgq6BgYIARABGBS6BgYIAhABGAGSBwMyLjigB--GAQ&sclient=gws-wiz-serp"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.google.com/search?q=google&sca_esv=dfca0da07af2405c&rlz=1C1GCEU_enIN1108IN1108&sxsrf=ADLYWIJhoL_ycY86KxOtytgyHqoymtWK4w%3A1719634304462&ei=gIl_ZoLiG7mdseMP9Y2vwAk&ved=0ahUKEwiCovH--P-GAxW5TmwGHfXGC5gQ4dUDCBA&uact=5&oq=google&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmdvb2dsZTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIWEC4YgAQYsQMY0QMYQxiDARjHARiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIQEAAYgAQYsQMYQxiDARiKBUikJ1DfBFjNH3ACeACQAQOYAcQBoAHQDaoBBDAuMTO4AQPIAQD4AQGYAgmgArMHqAIUwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICGRAuGIAEGLADGNEDGEMYxwEYyAMYigXYAQLCAhMQLhiABBiwAxhDGMgDGIoF2AECwgIQEC4YgAQY0QMYxwEYJxiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAh0QLhiABBjRAxjHARiKBRiXBRjcBBjeBBjgBNgBA8ICDRAuGNEDGMcBGCcY6gLCAgcQIxgnGOoCwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBBMICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQTCAg4QABiABBixAxiDARiKBcICBBAjGCeYAwWIBgGQBhK6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBS6BgYIBBABGAuSBwMyLjegB6ahAQ&sclient=gws-wiz-serp"><i className="fa fa-google-plus" /></a></li>
                <li><a href="https://www.google.com/search?q=instagram&sca_esv=dfca0da07af2405c&rlz=1C1GCEU_enIN1108IN1108&sxsrf=ADLYWILveP3Snpjn1uApiLvJl7O_a_aaMA%3A1719634387865&ei=04l_ZojANMmVseMP2ZSd6AE&oq=instagra&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGluc3RhZ3JhKgIIADIKECMYgAQYJxiKBTIQEAAYgAQYsQMYgwEYFBiHAjILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBSKUoUOQFWPgccAF4AZABAJgBmwGgAcwPqgEEMC4xNrgBAcgBAPgBAZgCCqACnAnCAgoQABiwAxjWBBhHwgIGEAAYFhgewgIOEAAYgAQYkQIYsQMYigXCAgUQABiABMICCBAAGIAEGLEDwgILEAAYgAQYkQIYigWYAwCIBgGQBgiSBwMxLjmgB7h1&sclient=gws-wiz-serp"><i className="fa fa-instagram" /></a></li>
               
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="footer-widget quick-link-widget">
              <div className="title">
                <h3>Quick Links</h3>
              </div>
              <ul className="cateogry-link">
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/trainer">Our Trainer</Link></li>
                <li><a>Daily workout</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="footer-widget latest-post-widget">
              <div className="title">
                <h3>About Us</h3>
              </div>
              <ul className="post-link">
                <li><Link to="/about">About Our Website</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget">
              <div className="title">
                <h3>Address</h3>
              </div>
              <ul className="address-list">
                <li>
                  <div className="icon-box">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="text-box">
                    <p>Sector-17, Gurugram, Haryana</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="text-box">
                    <p>6261255992</p>
                  </div>
                </li>
                <li>
                  <div className="icon-box">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="text-box">
                    <p>fitbahubali@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center bottom-text">
                © 2024 Fit Bahubali. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
