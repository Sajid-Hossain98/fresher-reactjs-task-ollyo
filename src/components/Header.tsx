import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteSelected, selectImages } from "../redux/slice/imageSlice";

const Header = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  //getting the length of selected images
  const selectedImages = images.filter((image) => image.selected === true);

  return (
    <div className="sticky top-0 w-full z-50 bg-gray-200 shadow-sm">
      <nav className="flex items-center justify-between gap-x-2 h-20 md:h-10 border-b border-b-gray-800/30 px-4 py-2 md:px-10 md:py-8">
        <div>
          {selectedImages.length > 0 ? (
            <span className="flex items-center gap-x-2 md:gap-x-3 font-medium text-sm md:text-xl leading-4 sm:leading-normal">
              <input
                type="checkbox"
                className="h-5 w-5 hover:bg-transparent"
                checked
                readOnly
              />
              {`${selectedImages.length} ${
                selectedImages.length > 1 ? "Files" : "File" //based on the length of selected files
              }  Selected`}
            </span>
          ) : (
            <h1 className="font-medium text-xl">Gallery</h1>
          )}
        </div>

        <div className="flex gap-x-2 md:gap-x-4">
          <Link
            to="/upload"
            className="font-semibold text-sm md:text-base py-1 md:py-2 px-2 md:px-3  rounded-sm text-center bg-[#00BDCC] hover:bg-[#00BDAA] leading-4"
          >
            Upload images
          </Link>

          {selectedImages.length > 0 && (
            <button
              className="bg-red-400 font-semibold text-sm md:text-base hover:underline underline-offset-2 rounded-sm cursor-pointer py-1 md:py-2 px-2 md:px-3 leading-4"
              onClick={() => dispatch(deleteSelected())}
            >
              {`Delete ${
                selectedImages.length > 1 ? "files" : "file" //based on the length of selected files
              }`}
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
