import { Upload, message } from 'antd';
import { InboxOutlined, FileImageOutlined } from '@ant-design/icons';

import "antd/dist/antd.css"

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Example() {

  const { Dragger } = Upload;

  const picturesProps = {
    name: 'images/*',
    multiple: true,
    listType: "picture",
    maxCount: 3,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const sourceFileProps = {
    name: 'file',
    maxCount: 1,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
    <Navbar />
    <div className="container max-w-7xl bg-slate-200 mx-auto rounded-xl my-20 py-10 px-2">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">New Product</h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">

                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="Enter product title here ..."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Short Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Enter your product's short description here..."
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Max 100 characters. Keep it short and easy to understand.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pictures</label>
                    <Dragger {...picturesProps}>
                      <p className="ant-upload-drag-icon">
                        <FileImageOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Max limit 3.
                      </p>
                    </Dragger>

                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                      Price (USA Dollar)
                    </label>
                    <div className="mt-1">
                      <input
                        id="price"
                        type={"number"}
                        name="price"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={10.00}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Maximum price can be 1 million dollar (1,000,000 $).
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Main File</label>
                    <Dragger {...picturesProps}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">
                        Only upload zip file. This file is what the buyer will get.
                      </p>
                    </Dragger>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  )
}
