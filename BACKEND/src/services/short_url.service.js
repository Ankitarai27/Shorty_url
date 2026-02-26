import { generateNanoId } from "../utils/helper.js"
import urlSchema from "../models/short_url.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js"

export const createShortUrlWithoutUser = async (url, slug = null) => {
    const normalizedSlug = slug?.trim().toLowerCase() || null
    const shortUrl = normalizedSlug || generateNanoId(7)

    if(!shortUrl) throw new Error("Short URL not generated")

    if(normalizedSlug){
        const exists = await getCustomShortUrl(normalizedSlug)
        if(exists) throw new Error("This custom url already exists")
    }

    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId,slug=null) => {
    const normalizedSlug = slug?.trim().toLowerCase() || null
    const shortUrl = normalizedSlug || generateNanoId(7)

    if(normalizedSlug){
        const exists = await getCustomShortUrl(normalizedSlug)
        if(exists) throw new Error("This custom url already exists")
    }

    await saveShortUrl(shortUrl,url,userId)
    return shortUrl;
}