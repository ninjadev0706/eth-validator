import Menu from "../components/Menu";
import PurchaseToken from "../components/PurchaseToken";

const Home = ({ account, promiseData, depositEth, withdrawEth, fetchData, availableTokenBal }) => {

  return (
    <div className="">
      <Menu />
      <PurchaseToken
        account={account}
        promiseData={promiseData}
        depositEth={depositEth}
        withdrawEth={withdrawEth}
        fetchData={fetchData}
        availableTokenBal={availableTokenBal}
      />
    </div>
  );
};

export default Home;
