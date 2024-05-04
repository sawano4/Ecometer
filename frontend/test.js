
import axios from "axios";

async function Test() {
  const data = ["Electricité"];
  //   const [matchingDocuments, setMatchingDocuments] = useState([]);
  const url = "http://localhost:3000/api/categories/nextCategories";
    const { data: res } = await axios.post(url, {
      userSelectedCategories: data,
    });
    console.log(res.nextCategories);
    
}

Test();