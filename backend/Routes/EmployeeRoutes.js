const { createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployeeById
} = require('../Controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middlewares/FileUplaoder');

const router = require('express').Router();

router.get('/', getAllEmployees)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', cloudinaryFileUploader.single('profileImage'), updateEmployeeById)
router.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee);

module.exports = router;