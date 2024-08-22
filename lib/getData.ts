export default async function getData(endpoint:string) {
    // console.log(endpoint)
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/api/${endpoint}`,{
          cache:"no-store"
        });
        const data = await response?.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    