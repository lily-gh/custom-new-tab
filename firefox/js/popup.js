
document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('url-input');
  const saveBtn = document.getElementById('save-btn');
  const resetBtn = document.getElementById('reset-btn');
  const message = document.getElementById('message');
  
  // Load saved URL when popup opens
  browser.storage.local.get(['newTabUrl'], function(result) {
    if (result.newTabUrl) {
      urlInput.value = result.newTabUrl;
    }
  });
  
  // Save URL
  saveBtn.addEventListener('click', function() {
    const url = urlInput.value.trim();
    
    // Simple validation
    if (!url) {
      showMessage('Please enter a URL', 'error');
      return;
    }
    
    // Check if it's a valid URL format (including file:// protocol)
    if (!isValidUrl(url)) {
      showMessage('Please enter a valid URL', 'error');
      return;
    }
    
    // Save to storage
    browser.storage.local.set({newTabUrl: url}, function() {
      showMessage('URL saved successfully!', 'success');
    });
  });
  
  // Reset URL
  resetBtn.addEventListener('click', function() {
    urlInput.value = '';
    browser.storage.local.remove('newTabUrl', function() {
      showMessage('Custom URL removed', 'success');
    });
  });
  
  // Helper function to display messages
  function showMessage(text, type) {
    message.textContent = text;
    message.className = 'message ' + type;
    
    // Clear message after 3 seconds
    setTimeout(() => {
      message.textContent = '';
      message.className = 'message';
    }, 3000);
  }
  
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
});
