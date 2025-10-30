import { Button, Input } from "antd";
import Header from "../layout/Header";
import { Facebook, Instagram, LocationEditIcon, MailIcon, PhoneCall, Twitter } from "lucide-react";
import Footer from "../layout/Footer";

export default function Contact() {
  return (
    <section className="contact">
      <Header />
      <div className="cantainer">
        <div className="contact-wrap">
          <div className="contact-text">
            <p className="contact-text-title">Biz bilan bog'laning</p>
            <div className="contact-text-sub">
              Quyidagi shaklni to'ldiring, shunda jamoamiz sizga imkon qadar
              tezroq javob beradi.
            </div>
          </div>
          <div className="contact-appeal">
            <div className="contact-box">
              <div className="contact-name-Eadress">
                <div className="contact-name-Eaddress-block">
                  <label className="contact-name-Eadress-block-title">Ism Familiya</label>
                  <Input placeholder="F.I.SH"></Input>
                </div>
                <div className="contact-name-Eaddress-block">
                  <label className="contact-name-Eadress-block-title">Email address</label>
                  <Input placeholder="you@example.com"></Input>
                </div>
              </div>
              <div className="contact-box-subject">
                <label className="contact-name-Eadress-block-title">Mavzu</label>
                <Input placeholder="Qanday mavzuda murojaat qilmoqchisiz?"></Input>
              </div>
              <div className="contact-message">
                <label className="contact-name-Eadress-block-title">Xabaringiz:</label>
                <Input.TextArea
                  placeholder="Xabaringizni bu yerga yozing..."
                  className="contact-message-text"
                ></Input.TextArea>
              </div>
              <Button type="primary">Yuborish</Button>
            </div>
            <div className="contact-info">
                <p className="contact-info-title">Bog'lanish uchun</p>
                <div className="contact-info-item">
                    <button className="contact-info-item-btn">
                        <MailIcon color="#007deb" />
                    </button>
                    <div className="contact-info-item-text">
                        <p className="contact-info-item-text-title">Email</p>
                        <p className="contact-info-item-text-sub">hello@company.com</p>
                    </div>
                </div>
                <div className="contact-info-item">
                    <button className="contact-info-item-btn">
                        <PhoneCall color="#007deb" />
                    </button>
                    <div className="contact-info-item-text">
                        <p className="contact-info-item-text-title">Phone</p>
                        <p className="contact-info-item-text-sub">+998 99 999 99 99</p>
                    </div>
                </div>
                <div className="contact-info-item">
                    <button className="contact-info-item-btn">
                        <LocationEditIcon color="#007deb" />
                    </button>
                    <div className="contact-info-item-text">
                        <p className="contact-info-item-text-title">Manzil</p>
                        <p className="contact-info-item-text-sub">123 Sohil, Urgench, Uzbekistan </p>
                    </div>
                </div>
                <hr />
                <div className="contact-info-follow">
                    <p className="contact-info-follow-title">Obuna bo'ling</p>
                    <div className="contact-info-follow-social">
                        <Instagram size={20} color="#007deb" />
                        <Facebook size={20} color="#007deb" />
                        <Twitter size={20} color="#007deb" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
