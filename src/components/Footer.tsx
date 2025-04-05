import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-5 px-4 bg-light mt-5">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-3 mb-4 mb-md-0">
            <Link href="/">
              <div className="text-dark h2">Fashion</div>
            </Link>
            <p>3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States</p>
            <p><strong>hello@lama.dev</strong></p>
            <p><strong>+1 234 567 890</strong></p>
            <div className="d-flex gap-3">
              <Image src="/images/facebook.png" alt="Facebook" width={16} height={16} />
              <Image src="/images/instagram.png" alt="Instagram" width={16} height={16} />
              <Image src="/images/youtube.png" alt="YouTube" width={16} height={16} />
              <Image src="/images/pinterest.png" alt="Pinterest" width={16} height={16} />
              <Image src="/images/x.png" alt="X" width={16} height={16} />
            </div>
          </div>

          <div className="col-md-6 d-flex justify-between mb-4 mb-md-0">
            <div>
              <h5 className="font-weight-bold">COMPANY</h5>
              <div className="d-flex flex-column">
                <Link href="">About Us</Link>
                <Link href="">Careers</Link>
                <Link href="">Affiliates</Link>
                <Link href="">Blog</Link>
                <Link href="">Contact Us</Link>
              </div>
            </div>
            <div>
              <h5 className="font-weight-bold">SHOP</h5>
              <div className="d-flex flex-column">
                <Link href="">New Arrivals</Link>
                <Link href="">Accessories</Link>
                <Link href="">Men</Link>
                <Link href="">Women</Link>
                <Link href="">All Products</Link>
              </div>
            </div>
            <div>
              <h5 className="font-weight-bold">HELP</h5>
              <div className="d-flex flex-column">
                <Link href="">Customer Service</Link>
                <Link href="">My Account</Link>
                <Link href="">Find a Store</Link>
                <Link href="">Legal & Privacy</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>

          
          <div className="col-md-3">
            <h5 className="font-weight-bold">SUBSCRIBE</h5>
            <p>Be the first to get the latest news about trends, promotions, and much more!</p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Email address"
                className="form-control me-2"
              />
              <button className="btn btn-primary">JOIN</button>
            </div>
            <p className="mt-3"><strong>Secure Payments</strong></p>
            <div className="d-flex justify-content-between">
              <Image src="/images/discover.png" alt="Discover" width={40} height={20} />
              <Image src="/images/skrill.png" alt="Skrill" width={40} height={20} />
              <Image src="/images/paypal.png" alt="PayPal" width={40} height={20} />
              <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={20} />
              <Image src="/images/visa.png" alt="Visa" width={40} height={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4">
          <div className="col-12 col-md-6">
            <p>© 2024 Lama Shop</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-between">
            <div>
              <span className="text-muted">Language</span>
              <span className="font-weight-bold">United States | English</span>
            </div>
            <div>
              <span className="text-muted">Currency</span>
              <span className="font-weight-bold">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
