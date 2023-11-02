import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import arrayMove from "array-move";
import SortableList, { SortableItem } from "react-easy-sort";

import {
  moveImage,
  selectImages,
  toggleImageSelection,
} from "../redux/slice/imageSlice";
import { cn } from "../lib/utils";

const Gallery = () => {
  //getting images
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  //this function is triggered when the user is done dragging and dropping any image
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    const sortedImages = arrayMove(images, oldIndex, newIndex);

    //dispatching images in the store with new reordered image array so that it stays reordered
    dispatch(moveImage(sortedImages));
  };

  return (
    <>
      <SortableList onSortEnd={onSortEnd} draggedItemClassName="">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-8 px-4 md:px-10 py-2 md:py-8">
          {images.length > 0 ? (
            images.map((image) => (
              <SortableItem key={image.id}>
                <li className="relative sm:first:col-span-2 sm:first:row-span-2">
                  {/* clicking on any image will select that image */}
                  <label>
                    <input
                      type="checkbox"
                      checked={image.selected}
                      onChange={
                        () => dispatch(toggleImageSelection({ id: image.id })) //updating the image selection state
                      }
                      className="absolute top-4 left-4 z-20 h-4 w-4 md:h-6 md:w-6 cursor-pointer"
                    />

                    <div className="relative group">
                      <img
                        className={cn(
                          "h-full w-full object-cover rounded-lg border-2 border-gray-300 select-none",
                          image.selected && "opacity-60" //selected images will have less opacity
                        )}
                        src={image.url}
                        alt=""
                      />
                      {/* A black layer will be visible on hover over the images but only for images that are not selected */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-black opacity-0 transition-opacity rounded-md cursor-grab",
                          !image.selected && "md:group-hover:opacity-40"
                        )}
                      />
                    </div>
                  </label>
                </li>
              </SortableItem>
            ))
          ) : (
            <Link
              to="/upload"
              className="font-semibold text-sm md:text-base py-1 md:py-2 px-2 md:px-3  rounded-sm text-center bg-[#00BDCC] hover:bg-[#00BDAA] leading-4"
            >
              Upload images
            </Link>
          )}
        </ul>
      </SortableList>
    </>
  );
};

export default Gallery;
