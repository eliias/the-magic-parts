import html from 'html'

const lftCol = html`<div class="col-sm-6">left</div>`
const rgtCol = html`<div class="col-sm-6">right</div>`

const dom = html`
  <div class="container">
    <div class="row">
      ${lftCol}
      ${rgtCol}
    </div>
  </div>
`

document.appendChild(dom)
