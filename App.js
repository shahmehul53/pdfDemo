// With Flow type annotations (https://flow.org/)
import PDFView from 'react-native-view-pdf';
import {View, TouchableOpacity, Text, } from 'react-native'
import React from 'react'
// Without Flow type annotations
// import PDFView from 'react-native-view-pdf/lib/index';

const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends React.Component {
  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1.5, backgroundColor: 'red' }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />

        <TouchableOpacity style={{flex: 0.5, justifyContent: 'center', alignItems: 'center',}}>
          <View style={{backgroundColor: 'red'}}>
          <Text>Next</Text>
          </View>
        </TouchableOpacity>

        
      </View>
    );
  }
}