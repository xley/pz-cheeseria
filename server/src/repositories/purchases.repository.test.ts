// @ts-nocheck 
import * as PurchaseRepository from './purchases.repository'
import { getRepository } from 'typeorm'
import { mocked } from 'ts-jest/utils'
import { generatePurchasesData, generatePurchasePayload, generatePurchaseData } from 'test/utils/generate'

jest.mock('typeorm');

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}))
beforeEach(() => {
    mockedGetRepo.find.mockClear()
    mockedGetRepo.findOne.mockClear()
    mockedGetRepo.save.mockClear()
})

describe("PurchaseRepository", () => {
    describe("getPurchases", () => {
        test('should return empty array', async () => {
            const userId = "4e45876c-f776-4265-a1ac-aee26a9b8694";
            const payload = { userId: userId };
            mockedGetRepo.find.mockResolvedValue([])
            const purchases = await PurchaseRepository.getPurchases(userId);
            expect(purchases).toEqual([])
            expect(mockedGetRepo.find).toHaveBeenCalledWith(payload)
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
        })

        test("should return purchase list", async () => {
            const userId = "f8ad8b04-f46c-4d51-9f3a-1d85805d7587"
            const payload = { userId: userId };
            const purchasesData = generatePurchasesData(2, payload)
            mockedGetRepo.find.mockResolvedValue(purchasesData)
            const purchases = await PurchaseRepository.getPurchases(userId);
            expect(purchases).toEqual(purchasesData)
            expect(mockedGetRepo.find).toHaveBeenCalledWith(payload)
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
        })
    })

    describe("addPurchase", () => {
        test("should add purchase to the database", async () => {
            const payload = generatePurchasePayload()
            const purchaseData = generatePurchaseData(payload)
            mockedGetRepo.save.mockResolvedValue(purchaseData)
            const purchase = await PurchaseRepository.createPurchase(payload);
            expect(purchase).toMatchObject(payload)
            expect(purchase).toEqual(purchaseData)
            expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
            expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
        })
    })
})