/** @format */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {
      /** scope:'folder/scope'*/
    })
    .then(function() {
      console.log('Service worker registered!')
    })
}
