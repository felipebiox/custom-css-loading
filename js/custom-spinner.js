function
  startLoadingSpinner ()
  {
    document.getElementById('custom-loading-spinner')
      .classList
        .add
        (
          'isActive'
        )
  }
function
  stopLoadingSpinner (t,e)
  {
    document.getElementById('custom-loading-spinner')
      .classList
        .remove
        (
          'isActive'
        )
  }
