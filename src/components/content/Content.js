import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Content = () => {
  return (
    <>
      <div className="content">
        <section
          style={{
            flexDirection: `row`,
            background: `#d4e9e2`,
            color: `#33433d`,
          }}
          class="box box-b  grid-col-2"
        >
          <img src={img1} alt="" />
          <div class="box-text">
            <h2 class="text-xl">Win a thousand Stars</h2>
            <p class="text-md">
              We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members
              in our Million Stars Giveaway and much more all week!*
            </p>
            <div>
              <button
                className="btn"
                style={{
                  background: `#d4e9e2`,
                  border: `1px solid #33433d`,
                  color: `33433d`,
                }}
              >
                Play to Win
              </button>
            </div>
          </div>
        </section>

        <section
          style={{
            flexDirection: "row-reverse",
            background: "#d4e9e2",
            color: "#33433d",
          }}
          class="box box-b  grid-col-2"
        >
          <img src={img2} alt="" />
          <div class="box-text section-2-text" style={{ fontWeight: "500" }}>
            <h2 class="text-md">A new way to earn sips and trips</h2>
            <div class="text-sm">
              <p>
                Now you can link your Starbucks® Rewards + Delta SkyMiles®
                accounts to get:
                <br />
              </p>
              <ul className="section-2-list">
                <li>150 Stars + 500 miles when you link before 12/31</li>

                <li>Double Stars on Delta travel days</li>

                <li>
                  1 mile per $1 spent at Starbucks (excludes taxes and
                  gratuities)**
                </li>
              </ul>
            </div>
            <div>
              <button
                className="btn"
                style={{
                  background: `#d4e9e2`,
                  border: `1px solid #33433d`,
                  color: `33433d`,
                }}
              >
                Link accounts
              </button>
            </div>
          </div>
        </section>

        <section
          style={{
            flexDirection: `row`,
            background: `#006241`,
            color: `#fff`,
          }}
          class="box box-b  grid-col-2"
        >
          <img src={img3} alt="" />
          <div class="box-text">
            <h2 class="text-xl">Perfectly pumpkin</h2>
            <p class="text-md">
              Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold
              Brew.
            </p>
            <div>
              <button
                className="btn"
                style={{
                  background: `#006241`,
                  border: `1px solid #fff`,
                  color: `#fff`,
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section
          style={{
            flexDirection: `row-reverse`,
            background: `#006241`,
            color: `#fff`,
          }}
          class="box box-b  grid-col-2"
        >
          <img src={img4} alt="" />
          <div class="box-text">
            <h2 class="text-xl">Layers of baked apple yum</h2>
            <p class="text-md">
              Try the Apple Crisp Oatmilk Macchiato, now nondairy and with
              Starbucks® Blonde Espresso.
            </p>
            <div>
              <button
                className="btn"
                style={{
                  background: `#006241`,
                  border: `1px solid #fff`,
                  color: `#fff`,
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
