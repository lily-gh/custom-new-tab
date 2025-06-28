document.addEventListener('DOMContentLoaded', function () {
  const loadingElement = document.getElementById('loading');
  const noUrlElement = document.getElementById('no-url');

  // Get the custom URL from storage
  chrome.storage.sync.get(['newTabUrl'], function (result) {
    if (result.newTabUrl) {
      // If URL is set, redirect to that URL
      window.location.href = result.newTabUrl;
    } else {
      // If no URL is set, show the instructions
      loadingElement.classList.add('hidden');
      noUrlElement.classList.remove('hidden');
    }
  });
});
