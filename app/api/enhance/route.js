import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request) {
  try {
    const apiToken = process.env.REPLICATE_API_TOKEN || "r8_cxFpPxGzaetXTmzQCt53e9U99v3TkHF1Ixnis";

    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Image URL or Base64 is required" },
        { status: 400 }
      );
    }

    const replicate = new Replicate({
      auth: apiToken,
    });

    // Real-ESRGAN Model (फोटोलाई १००% HD मा Upscale र Enhance गर्छ)
    const output = await replicate.run(
      "nightmareai/real-esrgan:f121d640bd286e1fdc6732651c64234022bfe08849b8daf755726b7be6fb1790",
      {
        input: {
          image: imageUrl,
          scale: 2,
          face_enhance: true,
        },
      }
    );

    return NextResponse.json({ enhancedUrl: output });
  } catch (error) {
    console.error("Replicate API Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}