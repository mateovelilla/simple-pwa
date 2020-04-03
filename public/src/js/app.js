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
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('Beforeinstall prompt fired')
  event.preventDefault()
  deferredPrompt = event
  return false
})
