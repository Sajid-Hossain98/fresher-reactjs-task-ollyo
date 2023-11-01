import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowBigLeftDash, FileImage, Loader2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addImage } from "../redux/slice/imageSlice";

const ImageUpload = () => {
  const [imagesToUpload, setImagesToUpload] = useState<FileList | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const cloud_name = import.meta.env.VITE_CLOUD_NAME;
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

  const dispatch = useDispatch();

  //function to handle the changes of the input when the user selects files
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      //if user selected any file/files then storing those files
      const selectedImage = e.target.files;

      //updating the state with the files that were selected by the user
      setImagesToUpload(selectedImage);

      //To preview the files that the user selected
      const imagePreviews: string[] = [];
      for (let i = 0; i < selectedImage.length; i++) {
        imagePreviews.push(URL.createObjectURL(selectedImage[i]));
      }
      setPreviewImages(imagePreviews);
    }
  };

  //function to handle the image upload
  const uploadImage = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const imageUrls: string[] = [];

      if (imagesToUpload) {
        setIsLoading(true);

        for (let i = 0; i < imagesToUpload.length; i++) {
          const formData = new FormData();
          formData.append("file", imagesToUpload[i]);
          formData.append("cloud_name", cloud_name);
          formData.append("upload_preset", upload_preset);

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
            formData
          );

          const imageUrl = res.data.url;
          imageUrls.push(imageUrl);

          dispatch(addImage(imageUrl));
        }

        setIsLoading(false);
        setImagesToUpload(null);
        setPreviewImages([]);
        toast.success("Uploaded successfully.");
      } else {
        toast.error("Please select image first."); //if no images are selected to upload then this block will run
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="pt-6">
      <div className="ml-10 bg-black w-fit text-white rounded-sm mb-2">
        <Link to="/" className="flex items-center gap-x-1 px-2 py-1">
          <ArrowBigLeftDash className="h-5 w-5 animate-leftRight" />
          Back
        </Link>
      </div>
      <form
        onSubmit={uploadImage}
        className="flex items-center gap-y-4 justify-center flex-col"
      >
        <label
          htmlFor="image"
          className="flex items-center justify-center flex-col h-40 w-40 bg-gradient-to-tl from-[#00becc94] to-[#4ce85994] rounded-sm outline-1 outline-dashed outline-gray-400 hover:outline-gray-500/90 cursor-pointer text-base text-gray-600 transition overflow-hidden"
        >
          <FileImage className="mb-2 text-[#263d3f]" />
          {previewImages.length > 0 ? (
            <p>{`${previewImages.length} ${
              previewImages.length > 1 ? "images" : "image"
            } selected!`}</p>
          ) : (
            <p>Select images</p>
          )}
          <span className="text-xs">(png/jpeg/webp)</span>
        </label>
        <input
          onChange={handleImageChange}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          id="image"
          className="hidden"
          multiple
        />
        <button
          type="submit"
          disabled={isLoading}
          className="font-semibold bg-black/90 hover:bg-black/80 disabled:cursor-not-allowed text-white px-4 py-2 rounded-sm transition"
        >
          {isLoading ? (
            <p className="flex items-center gap-x-2">
              <span className="animate-pulse">Uploading</span>
              <Loader2 className="w-5 h-5 animate-spin" />
            </p>
          ) : (
            <p>Upload</p>
          )}
        </button>
      </form>

      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 px-4 pb-4">
        {previewImages &&
          previewImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="adding image"
              className="h-[150px] md:h-[250px] md:w-[250px] w-[200px] mt-6 md:mt-10 border-2 border-dashed border-x-gray-300 rounded-md"
            />
          ))}
      </div>
    </div>
  );
};

export default ImageUpload;
