// @ts-nocheck 
import * as CheeseRepository from './cheese.repository'
import { getRepository } from 'typeorm'
import { mocked } from 'ts-jest/utils'
import { generateCheesesData, generateCheesePayload, generateCheeseData } from 'test/utils/generate'

jest.mock('typeorm');

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}))
beforeEach(() => {
    mockedGetRepo.find.mockClear()
    mockedGetRepo.findOne.mockClear()
    mockedGetRepo.save.mockClear()
})

describe("CheeseRepository", () => {
    describe("getCheeses", () => {
        test('should return empty array', async () => {
            mockedGetRepo.find.mockResolvedValue([])
            const cheeses = await CheeseRepository.getCheeses();
            expect(cheeses).toEqual([])
            expect(mockedGetRepo.find).toHaveBeenCalledWith()
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
        })

        test("should return cheese list", async () => {
            const cheesesData = generateCheesesData(2)
            mockedGetRepo.find.mockResolvedValue(cheesesData)
            const cheeses = await CheeseRepository.getCheeses();
            expect(cheeses).toEqual(cheesesData)
            expect(mockedGetRepo.find).toHaveBeenCalledWith()
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
        })
    })

    describe("addCheese", () => {
        test("should add cheese to the database", async () => {
            const payload = generateCheesePayload()
            const cheeseData = generateCheeseData(payload)
            mockedGetRepo.save.mockResolvedValue(cheeseData)
            const cheese = await CheeseRepository.createCheese(payload);
            expect(cheese).toMatchObject(payload)
            expect(cheese).toEqual(cheeseData)
            expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
            expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
        })
    })

    describe("getCheese", () => {
        test("should return cheese from the database", async () => {
            const id = 1
            const cheeseData = generateCheeseData({ id })
            mockedGetRepo.findOne.mockResolvedValue(cheeseData)
            const cheese = await CheeseRepository.getCheese(id)
            expect(cheese).toEqual(cheeseData)
            expect(cheese?.id).toBe(id)
            expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id })
            expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
        })

        test("should return null if cheese not found", async () => {
            const id = 1
            mockedGetRepo.findOne.mockResolvedValue(null)
            const cheese = await CheeseRepository.getCheese(id)
            expect(cheese).toBeNull()
            expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id })
            expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
        })
    })
})