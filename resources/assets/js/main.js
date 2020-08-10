// Import the plugins
const Uppy = require('@uppy/core')
const Dashboard = require('@uppy/dashboard')
const AwsS3 = require('@uppy/aws-s3')


const uppy = new Uppy()
  .use(Dashboard, {
    target: '#drag-drop-area',
    metaFields: [],
    trigger: '#uppy-select-files',
    inline: true,
    width: "100%",
    height: 550,
    thumbnailWidth: 280,
    showLinkToFileUploadResult: true,
    showProgressDetails: false,
    hideUploadButton: false,
    hideRetryButton: false,
    hidePauseResumeButton: false,
    hideCancelButton: false,
    hideProgressAfterFinish: false,
    note: null,
    closeModalOnClickOutside: false,
    closeAfterFinish: false,
    disableStatusBar: false,
    disableInformer: false,
    disableThumbnailGenerator: false,
    disablePageScrollWhenModalOpen: true,
    animateOpenClose: true,
    fileManagerSelectionType: 'files',
    proudlyDisplayPoweredByUppy: false,
    showSelectedFiles: true,
    showRemoveButtonAfterComplete: false,
    browserBackButtonClose: false,
    theme: 'light'
  })
  .use(AwsS3, { 
    limit: 4,
    companionUrl: 'http://drop.test:3020'
    })

uppy.on('complete', (result) => {
  console.log('Upload complete! We’ve uploaded these files:', result.successful)
})