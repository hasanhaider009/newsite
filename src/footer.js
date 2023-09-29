"use client";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { BsTwitter } from "react-icons/bs";

export default function FooterSitemapLinks() {
  return (
    <Footer className="target1 rounded-none">
      <div className="w-full">
        <div className="grid w-full sm:text-base text-xs grid-cols-2 gap-8 px-12 py-8 md:grid-cols-4 bg-[#272829]">
          <div>
            <Footer.Title title="Adresse" />
            <div className="text-white">
              GeoAnalysis Engineering GmbH,
              <br />
              Schauenburgerstrasse 116,
              <br />
              Kiel 24118, Germany
            </div>
            <div className="text-white mt-6">
              501-243 Northfield Dr E,
              <br />
              Waterloo N2K 0H2, Canada
            </div>
          </div>
          <div>
            <Footer.Title title="Kontakt" />
            <div className="text-white">
              Telefon: +49 431 53032960 (DE)
              <br />
              Fax: +49 431 5606295 (DE)
            </div>
            <div className="text-white mt-6">
              Telefon: +15197788139 (CA)
              <br />
              info@geoanalysis-engineering.de
            </div>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Link to={"/impressum"}>
                <p className=" hover:text-red-600">Impressum</p>
              </Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Social Media" />
            <Footer.LinkGroup row>
              <Footer.Icon
                className="mx-4 px-14"
                href="https://twitter.com/GeoAnalysis_Eng"
                icon={BsTwitter}
              />
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full px-12 py-6 sm:flex sm:items-center sm:justify-between bg-zinc-950">
          <Footer.Copyright
            by="GeoAnalysis Engineering™"
            href="#"
            year={2023}
          />
        </div>
      </div>
    </Footer>
  );
}
