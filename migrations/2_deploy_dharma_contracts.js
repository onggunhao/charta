const {generateParamsForDharmaMultiSigWallet, configureTokenRegistry} = require("./utils");

module.exports = (deployer, network, accounts) => {
    // Import the Dharma contracts.
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const DharmaMultiSigWallet = artifacts.require("DharmaMultiSigWallet");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const ERC721TokenRegistry = artifacts.require("ERC721TokenRegistry");
    const ContractRegistry = artifacts.require("ContractRegistry");
    const Collateralizer = artifacts.require("Collateralizer");
    const ERC721Collateralizer = artifacts.require("ERC721Collateralizer");

    const {
        signatories,
        numAuthorizationsRequired,
        timelock,
    } = generateParamsForDharmaMultiSigWallet(network, accounts);

    // Deploy the DharmaMultiSigWallet with a set of signatories, the number of
    // authorizations required before a transaction can be executed, and the
    // timelock period, defined in seconds.
    deployer.deploy(DharmaMultiSigWallet, signatories, numAuthorizationsRequired, timelock);

    // Deploy our Permissions library and link it to the contracts in our protocol that depend on it.
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, [
        DebtRegistry,
        TokenTransferProxy,
        Collateralizer,
        ERC721Collateralizer,
        DebtToken,
    ]);

    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);
        await deployer.deploy(TokenRegistry).then(async () => {
            const DummyToken = artifacts.require("DummyToken");
            await configureTokenRegistry(network, accounts, TokenRegistry, DummyToken);
        });
        await deployer.deploy(ERC721TokenRegistry).then(async () => {
            // const DummyToken = artifacts.require("DummyToken");
            // await configureTokenRegistry(network, accounts, ERC721TokenRegistry, DummyToken);
        });
        await deployer.deploy(
            Collateralizer,
            DebtKernel.address,
            DebtRegistry.address,
            TokenRegistry.address,
            TokenTransferProxy.address,
        );
        await deployer.deploy(
            ERC721Collateralizer,
            DebtKernel.address,
            DebtRegistry.address,
            TokenRegistry.address,
            TokenTransferProxy.address,
        );
        await deployer.deploy(
            ContractRegistry,
            Collateralizer.address,
            ERC721Collateralizer.address,
            DebtKernel.address,
            DebtRegistry.address,
            DebtToken.address,
            RepaymentRouter.address,
            TokenRegistry.address,
            ERC721TokenRegistry.address,
            TokenTransferProxy.address,
        );
    });
};
