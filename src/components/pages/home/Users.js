import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import usersActions from '../../../store/actions/users.actions';

import Section, { SectionHeader, SectionDivider } from '../../library/Section';
import Card from '../../library/Card';
import Table from '../../library/Table';

function Tasks() {
  const dispatch = useDispatch();
  const { requesting, users } = useSelector((state) => state.usersState);
  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, [dispatch]);

  return (
    <Section>
      <SectionHeader>
        <Button size='massive'>Créer un utilisateur</Button>
      </SectionHeader>

      <SectionDivider />

      <Card>
        <Table
          columns={[
            {
              key: 'code',
              title: 'Code',
              dataIndex: 'code'
            },
            {
              key: 'createdAt',
              title: 'Date de création',
              dataIndex: 'createdAt',
              dataType: 'date'
            },
            {
              key: 'firstName',
              title: 'Prénom(s)',
              dataIndex: 'firstName'
            },
            {
              key: 'lastName',
              title: 'Nom(s)',
              dataIndex: 'lastName'
            },
            {
              key: 'age',
              title: 'Âge',
              dataIndex: 'age'
            },
            {
              key: 'actions',
              title: 'Actions',
              render: () => <></>
            }
          ]}
          dataSource={users}
          requesting={requesting}
          noDataMessage='Aucun utilisateur enregistré'
        />
      </Card>
    </Section>
  );
}

export default Tasks;
