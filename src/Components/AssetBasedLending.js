// AssetBasedLending.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Info.css"; // You can create a new CSS file for specific styling if needed

function AssetBasedLending() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Asset-Based Lending</span>
        </h3>
        <p className="info-description">
          Following the financial crisis, as traditional banks were withdrawing from business financing, asset-based lenders were proliferating, offering mid-sized companies more financing options than ever. Unlike traditional banks, which rely heavily on the creditworthiness and financial strength of the company in need to approve financing, asset-based lenders rely on the creditworthiness of the company’s customers and the company’s assets as collateral. All a company needs to qualify for asset-based financing are reliable customers and its own assets, which could include its receivables, purchase orders, letters of credit, inventory, equipment, or real estate.
        </p>
        <br />
        <br />
      </div>

      {/* Plain Heading and Paragraph for Asset-Based Lending */}
      <div className="plain-content">
        <h3 className="plain-heading">Receivables Financing</h3>
        <br />
        <p className="plain-paragraph">
          Companies experiencing uneven cash flow due to the extended payment terms they offer customers can use their receivables as collateral to obtain an immediate cash advance. Receivables can be sold to an asset-based lender that advances the company up to 85% of their value. Based on the company’s sales record, a borrowing base is set up and adjusted monthly based on the amount of receivables generated.
        </p>
        <br />
        <br />
      </div>
      <div className="plain-content">
        <h3 className="plain-heading">Purchase Order Financing</h3>
        <br />
        <p className="plain-paragraph">
          Companies that are short on cash often find themselves having to turn away big orders or new customers because they can’t cover the upfront cost of supplies or products. Asset-based lenders utilize the purchase order as collateral for advancing the funds needed to pay a supplier in anticipation of full payment by the end-customer upon delivery of the goods.
        </p>
        <br />
        <br />
      </div>
      <div className="plain-content">
        <h3 className="plain-heading">Letter of Credit Financing</h3>
        <br />
        <p className="plain-paragraph">
          Mid-sized companies are often challenged when it comes to accessing the international market due to their lack of financial experience in international trade. Most foreign suppliers require, at a minimum, a letter of credit to guarantee payment. Asset-based lenders offer companies the opportunity to obtain a letter of credit with no security deposit, relying instead on the financial stability and creditworthiness of the company’s foreign supplier and its end-customer.
        </p>
        <br />
        <br />
      </div>
      <div className="plain-content">
        <h3 className="plain-heading">Inventory Financing</h3>
        <br />
        <p className="plain-paragraph">
          When a company needs capital to purchase new inventory, it can turn to an asset-based lender for an immediate cash infusion. The company’s current and future inventory are used as collateral for a revolving line of credit that can be drawn down as needed. The size of the credit line is based on the liquidation value of eligible inventory and is adjusted based on the amount of inventory on hand.
        </p>
        <br />
        <br />
      </div>
      <div className="plain-content">
        <h3 className="plain-heading">Equipment Financing</h3>
        <br />
        <p className="plain-paragraph">
          Equipment financing is one of the more common forms of asset-based financing, especially for companies that rely on equipment to generate revenue. It is a straightforward loan transaction that relies on the equipment as collateral for financing up to 50% of its cost. The loan terms are generally fixed (one to seven years) as is the annual percentage rate (APR).
        </p>
        <br />
        <br />
      </div>
      <div className="plain-content">
        <h3 className="plain-heading">Real Estate Based Lending</h3>
        <br />
        <p className="plain-paragraph">
          In a hot real estate market, investors can miss out on opportunities if they don’t have access to financing, and many are unable to qualify if they carry too much mortgage debt on existing properties. Asset-based lenders rely almost exclusively on the targeted real estate and its viability as a cash flow generator in making their lending decisions. Because there is no in-depth credit application, the process for obtaining an asset-based real estate loan is much easier and quicker than a conventional real estate loan.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AssetBasedLending;
