export const generateFileName = (str: string): string =>{
    let slug = str.toLowerCase();
    slug = slug.replace(/\s+/g, '-');
    const timeCode = Date.now();
    return `${timeCode}-${slug}`
}

export const filePathClean = (str: string): string=>{
    const normalizedPath = str.replace(/\\/g, '/');
    const updatedPath = normalizedPath.replace('public', '');
    return updatedPath;
}