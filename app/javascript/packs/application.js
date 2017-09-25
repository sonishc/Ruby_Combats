/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

var Chill = React.createClass({
  render: function() {
    return(
          <div class = "god">
              <div class="wrapper">
                  <div id="top">
                      <p class = "chill"><b>V.R.3.3.3.</b></p>
                  </div>
                  <div class="main">
                      <div class="mainElement">
                          <div class="elements" id="TopLeft"></div>
                          <div class="elements" id="TopRight"></div>
                          <div class="elements" id="BottomLeft"></div>
                          <div class="elements" id="BottomRight"></div>
                      </div>
                  </div>
                  <div id="bottom"><p class="chill">&copy Rostyslav Vakh </p></div>
              </div>
          </div>
      )
  }
})
