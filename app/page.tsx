"use client";

import * as React from "react";

import { Button, Typography } from "@mui/material";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Image from "next/image";

export default function ImagePaste() {
  async function loadBlob(fileName: string) {
    const fetched = await fetch(fileName);
    return await fetched.blob();
  }

  const [imageUrl, setImageUrl] = React.useState("");

  // 处理剪贴板变化的函数
  const handleClipboardChange = async () => {
    try {
      const text = await navigator.clipboard.readText();
      showNotification("Updated clipboard contents: " + text);
    } catch (e) {
      showNotification("Failed to read clipboard contents");
    }
  };

  React.useEffect(() => {
    // 添加剪贴板变化监听器
    document.addEventListener("clipboardchange", handleClipboardChange);

    // 清理函数
    return () => {
      document.removeEventListener("clipboardchange", handleClipboardChange);
    };
  }, []);

  return (
    <div>
      <Typography variant="h5" className="font-semibold">
        image upload
      </Typography>
      <div>
        <Button
          variant="contained"
          onClick={async () => {
            try {
              const url: string =
                "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png";
              const blobInput = await loadBlob(url);
              const clipboardItemInput = new ClipboardItem({
                "image/png": blobInput,
              });
              await navigator.clipboard.write([clipboardItemInput]);

              showNotification("image copied");
            } catch (e) {
              showNotification("image not copied");
            }
          }}
          className="font-semibold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          copy logo
        </Button>
        <Button
          variant="contained"
          onClick={async (e) => {
            try {
              const clipboardItems = await navigator.clipboard.read();
              console.log(clipboardItems);
              const blobOutput = await clipboardItems[0].getType("image/png");
              setImageUrl(window.URL.createObjectURL(blobOutput));
              showNotification("Image pasted");
            } catch (event) {
              showNotification("Failed to read clipboard");
            }
          }}
          className="font-semibold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          paste image
        </Button>
        <div>
          <Image
            src={imageUrl === "" ? "/ex.png" : imageUrl}
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="paste images"
            onPaste={(event) => {
              var items = event.clipboardData && event.clipboardData.items;
              var file = null;
              if (items && items.length) {
                // 检索剪切板items
                for (var i = 0; i < items.length; i++) {
                  if (items[i].type.indexOf("image") !== -1) {
                    file = items[i].getAsFile();
                    break;
                  }
                }
              }
              setImageUrl(file ? window.URL.createObjectURL(file) : "");
            }}
          />
        </div>
      </div>
    </div>
  );
}

function showNotification(message: string) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "center",
  }).showToast();
}
