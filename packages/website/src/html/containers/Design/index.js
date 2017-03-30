import React from 'react';
import { TypeBox, ColorBox } from '../../components';
import './index.styl';

const renderTypography = () =>
  <section>
    <h2 id="typography">Typography</h2>
    <p>The body font is set to Fakt, font size is 14px and line height is 2.</p>
    <div className="row type-box-container">
      <TypeBox />
      <TypeBox themeDark />
    </div>
    <div className="type-box box-table">
      <table className="typography-table">
        <tr>
          <td>Light theme default type color</td>
          <td className="big opacity-87 variable">$color-text</td>
          <td className="big opacity-87 name">Primary</td>
          <td className="big opacity-87 color">#00000</td>
          <td className="big opacity-87 opacity">87%</td>
        </tr>
        <tr>
          <td rowSpan="2" className="rowspan opacity-54">
            Default light bg:<br />Auth0 Grey, #e3e5e7
          </td>
          <td className="big opacity-54 variable">$color-text-light</td>
          <td className="big opacity-54 name">Secondary</td>
          <td className="big opacity-54 color">#00000</td>
          <td className="big opacity-54 opacity">54%</td>
        </tr>
        <tr>
          <td className="big opacity-26 variable">$color-text-lighter</td>
          <td className="big opacity-26 name">Disabled</td>
          <td className="big opacity-26 color">#00000</td>
          <td className="big opacity-26 opacity">26%</td>
        </tr>
      </table>
    </div>
    <div className="theme-dark">
      <div className="type-box box-table">
        <table className="typography-table">
          <tr>
            <td>Light theme default type color</td>
            <td className="big opacity-100 variable">$color-text-contrast</td>
            <td className="big opacity-100 name">Primary</td>
            <td className="big opacity-100 color">#ffffff</td>
            <td className="big opacity-100 opacity">100%</td>
          </tr>
          <tr>
            <td rowSpan="2" className="rowspan opacity-70">
              Default light bg:<br />Auth0 Grey, #e3e5e7
            </td>
            <td className="big opacity-70 variable">$color-text-contrast-light</td>
            <td className="big opacity-70 name">Secondary</td>
            <td className="big opacity-70 color">#ffffff</td>
            <td className="big opacity-70 opacity">70%</td>
          </tr>
          <tr>
            <td className="big opacity-30 variable">$color-text-contrast-lighter</td>
            <td className="big opacity-30 name">Disabled</td>
            <td className="big opacity-30 color">#ffffff</td>
            <td className="big opacity-30 opacity">30%</td>
          </tr>
        </table>
      </div>
    </div>
    <hr />
    <h3>Text utilities</h3>
    <p className="text-left"> <code>.text-left</code> Einstein's Letter to Freud</p>
    <p className="text-center"> <code>.text-center</code> Einstein's Letter to Freud</p>
    <p className="text-right"> <code>.text-right</code> Einstein's Letter to Freud</p>
    <p className="text-justify"> <code>.text-justify</code> Einstein's Letter to Freud</p>
    <p className="text-nowrap"> <code>.text-nowrap</code> Einstein's Letter to Freud</p>
    <p>
      <code>.text-lowercase</code>
      <span className="text-lowercase"> Einstein's Letter to Freud</span>
    </p>
    <p>
      <code>.text-uppercase</code>
      <span className="text-uppercase"> Einstein's Letter to Freud</span>
    </p>
    <p>
      <code>.text-capitalize</code>
      <span className="text-capitalize"> Einstein's Letter to Freud</span>
    </p>
  </section>;

const renderPrimaryColors = () =>
  <section>
    <h2 id="primary-colors">Primary colors</h2>
    <p>These are the colors that define our brand.</p>
    <div className="row">
      <ColorBox variable="$color-red" color="#eb5424" />
      <ColorBox variable="$color-blue-light" color="#44c7f4" />
      <ColorBox variable="$color-blue" color="#16214d" />
      <ColorBox variable="$color-yellow" color="#eaca2c" />
    </div>
  </section>;

const renderSecondaryColors = () =>
  <section>
    <h2 id="secondary-colors">Secondary colors</h2>
    <p>These colors are support to accompany the primary colors.</p>
    <div className="row">
      <ColorBox variable="$color-orange" color="#ff9a57" />
      <ColorBox variable="$color-oil" color="#5c666f" />
      <ColorBox variable="$color-green" color="#01b48f" />
      <ColorBox variable="$color-gray" color="#d0d2d3" />
      <ColorBox variable="$color-pink" color="#c879b2" />
    </div>
  </section>;

const renderBackgroundColors = () =>
  <section>
    <h2 id="background-colors">Background colors</h2>
    <p>
      We recommend to use this set of background colors in order to
      complement the primary and secondary colors.
    </p>
    <div className="row">
      <ColorBox variable="$bg-color-dark" color="#222228" />
      <ColorBox variable="$bg-color-oil" color="#5c666f" />
      <ColorBox variable="$bg-color-gray" color="#e3e5e7" />
      <ColorBox variable="$bg-color-light" color="#f5f7f9" />
    </div>
  </section>;

const renderStatusColors = () =>
  <section>
    <h2 id="status-colors">Status colors</h2>
    <p>These colors are used in every alert message: info, error, success and warning.</p>
    <div className="row">
      <ColorBox variable="$bg-color-success" color="#7ed321" />
      <ColorBox variable="$bg-color-error" color="#ff3e00" />
      <ColorBox variable="$bg-color-info" color="#44c7f4" />
      <ColorBox variable="$bg-color-alert" color="#f0cc00" />
    </div>
  </section>;

const Design = () =>
  <div className="styleguide-section design-section">
    <section className="jumbotron">
      <h2>
        <img src="https://cdn.auth0.com/website/styleguide/design-icon.svg" alt="Design" />
      </h2>
      <h1>Design</h1>
      <p>“The only important thing about design is how it relates to people.”</p>
    </section>
    <section className="section-content">
      { renderTypography() }
      { renderPrimaryColors() }
      { renderSecondaryColors() }
      { renderBackgroundColors() }
      { renderStatusColors() }
    </section>
  </div>;

export default Design;
