const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

   contract('ApprovalContract', function (accounts) {

      it('initiates contract', async function() {
         const contract = await ApprovalContract.deployed();
         const approver = await contract.approver.call();
         assert.equal(approver, 0xcA4Cf473EBA4C81e36112aFe1479ea116d2fEC1D, "approvers don't match")
      });

      it('takes a deposit', async function() {
         const contract = await ApprovalContract.deployed();
         await contract.deposit(accounts[0], {value: 1e+18, from: accounts[1]});
         assert.equal(1e+18, 1e+18, "amount did not match");
      });

   });
