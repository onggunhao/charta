export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:38:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:38:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          14080
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 13984,
        "name": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            14080
          ],
          "name": "SafeMath",
          "scope": 14081
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 14080,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 14017,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 13985,
                        "name": "ElementaryTypeName",
                        "src": "216:7:38"
                      }
                    ],
                    "id": 13986,
                    "name": "VariableDeclaration",
                    "src": "216:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14017,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 13987,
                        "name": "ElementaryTypeName",
                        "src": "227:7:38"
                      }
                    ],
                    "id": 13988,
                    "name": "VariableDeclaration",
                    "src": "227:9:38"
                  }
                ],
                "id": 13989,
                "name": "ParameterList",
                "src": "215:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14017,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 13990,
                        "name": "ElementaryTypeName",
                        "src": "261:7:38"
                      }
                    ],
                    "id": 13991,
                    "name": "VariableDeclaration",
                    "src": "261:7:38"
                  }
                ],
                "id": 13992,
                "name": "ParameterList",
                "src": "260:9:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13986,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 13993,
                            "name": "Identifier",
                            "src": "280:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 13994,
                            "name": "Literal",
                            "src": "285:1:38"
                          }
                        ],
                        "id": 13995,
                        "name": "BinaryOperation",
                        "src": "280:6:38"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 13992
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 13996,
                                "name": "Literal",
                                "src": "303:1:38"
                              }
                            ],
                            "id": 13997,
                            "name": "Return",
                            "src": "296:8:38"
                          }
                        ],
                        "id": 13998,
                        "name": "Block",
                        "src": "288:23:38"
                      }
                    ],
                    "id": 13999,
                    "name": "IfStatement",
                    "src": "276:35:38"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        14001
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14017,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 14000,
                            "name": "ElementaryTypeName",
                            "src": "316:7:38"
                          }
                        ],
                        "id": 14001,
                        "name": "VariableDeclaration",
                        "src": "316:9:38"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13986,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14002,
                            "name": "Identifier",
                            "src": "328:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13988,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14003,
                            "name": "Identifier",
                            "src": "332:1:38"
                          }
                        ],
                        "id": 14004,
                        "name": "BinaryOperation",
                        "src": "328:5:38"
                      }
                    ],
                    "id": 14005,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:38"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15809,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14006,
                            "name": "Identifier",
                            "src": "339:6:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14001,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 14007,
                                    "name": "Identifier",
                                    "src": "346:1:38"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13986,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 14008,
                                    "name": "Identifier",
                                    "src": "350:1:38"
                                  }
                                ],
                                "id": 14009,
                                "name": "BinaryOperation",
                                "src": "346:5:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13988,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 14010,
                                "name": "Identifier",
                                "src": "355:1:38"
                              }
                            ],
                            "id": 14011,
                            "name": "BinaryOperation",
                            "src": "346:10:38"
                          }
                        ],
                        "id": 14012,
                        "name": "FunctionCall",
                        "src": "339:18:38"
                      }
                    ],
                    "id": 14013,
                    "name": "ExpressionStatement",
                    "src": "339:18:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13992
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14001,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14014,
                        "name": "Identifier",
                        "src": "370:1:38"
                      }
                    ],
                    "id": 14015,
                    "name": "Return",
                    "src": "363:8:38"
                  }
                ],
                "id": 14016,
                "name": "Block",
                "src": "270:106:38"
              }
            ],
            "id": 14017,
            "name": "FunctionDefinition",
            "src": "203:173:38"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 14080,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 14035,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14018,
                        "name": "ElementaryTypeName",
                        "src": "471:7:38"
                      }
                    ],
                    "id": 14019,
                    "name": "VariableDeclaration",
                    "src": "471:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14035,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14020,
                        "name": "ElementaryTypeName",
                        "src": "482:7:38"
                      }
                    ],
                    "id": 14021,
                    "name": "VariableDeclaration",
                    "src": "482:9:38"
                  }
                ],
                "id": 14022,
                "name": "ParameterList",
                "src": "470:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14035,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14023,
                        "name": "ElementaryTypeName",
                        "src": "516:7:38"
                      }
                    ],
                    "id": 14024,
                    "name": "VariableDeclaration",
                    "src": "516:7:38"
                  }
                ],
                "id": 14025,
                "name": "ParameterList",
                "src": "515:9:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14027
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14035,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 14026,
                            "name": "ElementaryTypeName",
                            "src": "605:7:38"
                          }
                        ],
                        "id": 14027,
                        "name": "VariableDeclaration",
                        "src": "605:9:38"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14019,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14028,
                            "name": "Identifier",
                            "src": "617:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14021,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14029,
                            "name": "Identifier",
                            "src": "621:1:38"
                          }
                        ],
                        "id": 14030,
                        "name": "BinaryOperation",
                        "src": "617:5:38"
                      }
                    ],
                    "id": 14031,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14025
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14027,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14032,
                        "name": "Identifier",
                        "src": "717:1:38"
                      }
                    ],
                    "id": 14033,
                    "name": "Return",
                    "src": "710:8:38"
                  }
                ],
                "id": 14034,
                "name": "Block",
                "src": "525:198:38"
              }
            ],
            "id": 14035,
            "name": "FunctionDefinition",
            "src": "458:265:38"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 14080,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 14055,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14036,
                        "name": "ElementaryTypeName",
                        "src": "848:7:38"
                      }
                    ],
                    "id": 14037,
                    "name": "VariableDeclaration",
                    "src": "848:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14055,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14038,
                        "name": "ElementaryTypeName",
                        "src": "859:7:38"
                      }
                    ],
                    "id": 14039,
                    "name": "VariableDeclaration",
                    "src": "859:9:38"
                  }
                ],
                "id": 14040,
                "name": "ParameterList",
                "src": "847:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14055,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14041,
                        "name": "ElementaryTypeName",
                        "src": "893:7:38"
                      }
                    ],
                    "id": 14042,
                    "name": "VariableDeclaration",
                    "src": "893:7:38"
                  }
                ],
                "id": 14043,
                "name": "ParameterList",
                "src": "892:9:38"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15809,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14044,
                            "name": "Identifier",
                            "src": "908:6:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14039,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 14045,
                                "name": "Identifier",
                                "src": "915:1:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14037,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 14046,
                                "name": "Identifier",
                                "src": "920:1:38"
                              }
                            ],
                            "id": 14047,
                            "name": "BinaryOperation",
                            "src": "915:6:38"
                          }
                        ],
                        "id": 14048,
                        "name": "FunctionCall",
                        "src": "908:14:38"
                      }
                    ],
                    "id": 14049,
                    "name": "ExpressionStatement",
                    "src": "908:14:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14043
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14037,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14050,
                            "name": "Identifier",
                            "src": "935:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14039,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14051,
                            "name": "Identifier",
                            "src": "939:1:38"
                          }
                        ],
                        "id": 14052,
                        "name": "BinaryOperation",
                        "src": "935:5:38"
                      }
                    ],
                    "id": 14053,
                    "name": "Return",
                    "src": "928:12:38"
                  }
                ],
                "id": 14054,
                "name": "Block",
                "src": "902:43:38"
              }
            ],
            "id": 14055,
            "name": "FunctionDefinition",
            "src": "835:110:38"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 14080,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 14079,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14056,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:38"
                      }
                    ],
                    "id": 14057,
                    "name": "VariableDeclaration",
                    "src": "1020:9:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 14079,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14058,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:38"
                      }
                    ],
                    "id": 14059,
                    "name": "VariableDeclaration",
                    "src": "1031:9:38"
                  }
                ],
                "id": 14060,
                "name": "ParameterList",
                "src": "1019:22:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14079,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14061,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:38"
                      }
                    ],
                    "id": 14062,
                    "name": "VariableDeclaration",
                    "src": "1065:7:38"
                  }
                ],
                "id": 14063,
                "name": "ParameterList",
                "src": "1064:9:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14065
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 14079,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 14064,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:38"
                          }
                        ],
                        "id": 14065,
                        "name": "VariableDeclaration",
                        "src": "1080:9:38"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14057,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 14066,
                            "name": "Identifier",
                            "src": "1092:1:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14059,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 14067,
                            "name": "Identifier",
                            "src": "1096:1:38"
                          }
                        ],
                        "id": 14068,
                        "name": "BinaryOperation",
                        "src": "1092:5:38"
                      }
                    ],
                    "id": 14069,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:38"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 15809,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 14070,
                            "name": "Identifier",
                            "src": "1103:6:38"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14065,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 14071,
                                "name": "Identifier",
                                "src": "1110:1:38"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14057,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 14072,
                                "name": "Identifier",
                                "src": "1115:1:38"
                              }
                            ],
                            "id": 14073,
                            "name": "BinaryOperation",
                            "src": "1110:6:38"
                          }
                        ],
                        "id": 14074,
                        "name": "FunctionCall",
                        "src": "1103:14:38"
                      }
                    ],
                    "id": 14075,
                    "name": "ExpressionStatement",
                    "src": "1103:14:38"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14063
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 14065,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 14076,
                        "name": "Identifier",
                        "src": "1130:1:38"
                      }
                    ],
                    "id": 14077,
                    "name": "Return",
                    "src": "1123:8:38"
                  }
                ],
                "id": 14078,
                "name": "Block",
                "src": "1074:62:38"
              }
            ],
            "id": 14079,
            "name": "FunctionDefinition",
            "src": "1007:129:38"
          }
        ],
        "id": 14080,
        "name": "ContractDefinition",
        "src": "117:1021:38"
      }
    ],
    "id": 14081,
    "name": "SourceUnit",
    "src": "0:1139:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-21T17:50:41.142Z"
}