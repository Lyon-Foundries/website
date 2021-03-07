import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Footer = () => {
  return (
    <footer className="mt-auto pt-16">
      <div className="flex flex-col justify-between max-w-4xl p-4 mx-auto md:p-8">
        <div className="flex flex-wrap">
          <div className="flex-1 flex mr-4">
            <div className="flex-1 min-w-max pt-4 mr-4">
              <StaticImage
                src="../images/logo.png"
                alt="Bottom logo"
                width={96}
              />
            </div>
            <div className="flex-1 min-w-max pt-4">
              <p className="font-bold mb-1">OUR INVOLVEMENT</p>
              <ul>
                <li>
                  <a href="https://github.com/arlyon/async-stripe">
                    async-stripe
                  </a>
                </li>
                <li>
                  <a href="https://github.com/arlyon/aiobreaker">aiobreaker</a>
                </li>
                <li>
                  <a href="https://github.com/arlyon/bluenoise-rs">
                    bluenoise-rs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 min-w-max pt-4 mr-4">
              <p className="font-bold mb-1">WHAT WE DO</p>
              <ul>
                <li>Technical Consulting</li>
                <li>Architecture & Design</li>
                <li>Cloud Solutions</li>
                <li>Proof of Concepts and MVPs</li>
                <li>Pro Rata For Non-Profits</li>
              </ul>
            </div>
            <div className="flex-1 min-w-max pt-4">
              <p className="font-bold mb-1">GET IN TOUCH</p>
              <a className="underline" href="mailto:alex@foundries.dev">
                alex@foundries.dev
              </a>
              <br />
              Lyon Foundries
              <br />
              13A Clermiston Rd N<br />
              Edinburgh
              <br />
              <br />
              We're always looking for
              <br />
              good people.
            </div>
          </div>
        </div>
        <hr className="my-16" />
        <div className="text-center mb-8">Copyright 2021 - Lyon Foundries</div>
      </div>
    </footer>
  );
};
