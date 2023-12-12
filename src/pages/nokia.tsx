import Layout from "src/components/Layout";
import { nokia } from "src/assets/data";
import CompanyComponent from "src/components/Company";

export default function Home() {
  return (
    <Layout>
      <CompanyComponent company={nokia} />
    </Layout>
  );
}
