export function genrateNextCursor({  limit, data }) {

    return new Date(data[limit - 1]?.updatedAt).getTime() || "stop";
  
}
