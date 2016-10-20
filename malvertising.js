import $ from 'jquery'

// your friendly malvertising service
const pref = $.post
$.post = function(...args) {
  pref({
    url: 'https://example.com'
  })
  return pref.call(null, ...args)
}

// example
$.post({
  url: 'https://example.net'
})
