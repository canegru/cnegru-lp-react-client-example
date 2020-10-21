import React, { useEffect } from 'react';
import { lpTagNewPage } from '../../@utils/LivePerson';
import { CopyBlock, dracula } from "react-code-blocks";

const codeExample = `// Example on how to call newPage
window.lpTag.newPage(
  document.URL,
  {
    section: ['lpRecommended', 'page1'],
  },
);
`
function PageTwo() {
  useEffect(() => {
    lpTagNewPage(['lpRecommended', 'page2']);
  }, []);

  return (
    <div className="w-full p-10 bg-gray-100">
      <div className="w-full">
        <h1 className="font-light text-3xl">Page 2</h1>
        <p className="pt-5 text-sm">On component mount, this view calls lpTag.newPage as shown below.</p>
        <CopyBlock
          text={codeExample}
          language={'jsx'}
          showLineNumbers
          theme={dracula}
          codeBlock
        />
      </div>
    </div>
  )
}

export default PageTwo;