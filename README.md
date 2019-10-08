# react-gdrive-image-viewer

This library that lets you use your google drive as a mini data to view your google drivei images on a custom page.

*NOTE*: Currently, google does not require OAuth 2.0 to inquire about public shared google drive directories.

## Setup

### Create Google API Consle Key

* Naviage to https://console.developers.google.com/ and sign in with your google account.
* Select "Create". Type in your project name and hit "Create".
* On the page it takes you next, press on **"Enable APIs and Service"**. Select **"Google Drive API"** from the list and press **"Enable"**.
* On the next page, select **"Create Credentials"**, or from the left panel, select **"Credentials"** and **"Create API Key"**. 
* When asked, select **"Restrict Key"**. In the **"Application restrictions"**, select **"http referrers"**  and add your website as restriction item in **"Website restrictions"**.
* In **API restrictions** sections, select Restrict Key for **Google Drive API**. Click save when done.
* Copy and save your API Key to be used later.

### Setup Google Drive Directory

* Navigate to http://drive.google.com. Find the directory that you want to share. Make sure it only contains images in formats readable by Google Drive and your targeted browser.
* **NOTE: THIS DIRECTORY WILL BE ACCESSIBLE BY ANYONE WITH A LINK AND ACCESSIBLE TO THE PUBLIC. MAKE SURE YOU DO NOT HAVE ANY SENSITIVE INFORMATION IN THIS DIRECTORY.**
* Right click on the directory and select **"Get Sharable Link"**. Copy the link and extract the id from it.
* The id can be extracted as follows 
**https://drive.google.com/open?id=**ID_GOES_HERE****
* Now that you have your directory ID and Google API Key, we are ready to use this react component.

## Use Instructions

### import

```
import GDImageViewer from './path/to/lib/GDImageViewer';
```
### required fields
```
{
    gkey: "gkey: "{GOOGLE_API_KEY}",
    dirId: "{GOOGLE_DRIVE_PUBLIC_DIRECTORY_ID}",
    name: "name1",
    options: [Object]
}
```

### options
```
{
    // react style object
    // https://reactjs.org/docs/dom-elements.html#style

    style: {
    },

    // behavior when image is clicked
    // if on click is empty (no hover or newWindow)
    // current tab will show full image
    // if modal true, image opens as overlay
    // on current tab
    // if new window is true, new tab is launched
    // with image url

    onClick {
        modal: true,
        newWindow: false
    },
    
    // if set true, hover over opacity effect
    // will be set

    hover: true
}

```

### initialize and pass prop
```
<GDImageViewer data={required_fields_object}>
```