import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectImages, toggleImageSelection } from "../redux/slice/imageSlice";
import { cn } from "../lib/utils";

const Gallery = () => {
  //getting the images
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-8 px-4 md:px-10 py-2 md:py-8">
        {images.length > 0 ? (
          images.map((image) => (
            <li
              key={image.id}
              className="relative sm:first:col-span-2 sm:first:row-span-2"
            >
              <label>
                <input
                  type="checkbox"
                  checked={image.selected}
                  onChange={
                    () => dispatch(toggleImageSelection({ id: image.id })) //updating the image selection state
                  }
                  className="absolute top-4 left-4 z-20 h-4 w-4 md:h-6 md:w-6"
                />

                <div className="relative group">
                  <img
                    className={cn(
                      "h-full w-full object-cover rounded-md border-2 border-gray-300 select-none",
                      image.selected && "opacity-60" //selected images will have less opacity
                    )}
                    src={image.url}
                    alt=""
                  />
                  {/* A black layer will be visible on hover over the images but only for images that are not selected */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-black opacity-0 transition-opacity rounded-md cursor-pointer",
                      !image.selected && "md:group-hover:opacity-50"
                    )}
                  />
                </div>
              </label>
            </li>
          ))
        ) : (
          <Link to="/upload" className="flex items-center justify-center">
            Upload images
          </Link>
        )}
      </ul>
    </>
  );
};

export default Gallery;
